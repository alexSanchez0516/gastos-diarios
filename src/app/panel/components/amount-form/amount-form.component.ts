import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Amount, Category} from "../../interfaces/interfaces";
import {MyErrorStateMatcher} from "../../../helpers/MyErrorStateMatcher";
import {notSpacer, onlyNumbers} from "../../../helpers/Patterns";
import {DomSanitizer} from "@angular/platform-browser";
import {FirebaseStorageService} from "../../../services/firebase-storage.service";
import {alertError} from "../../../utils/alerts";

@Component({
  selector: 'app-amount-form',
  templateUrl: './amount-form.component.html',
  styleUrls: ['./amount-form.component.css']
})
export class AmountFormComponent implements OnInit, OnChanges{

  @Input() categories!: Category[]
  @ViewChild('file') file!: ElementRef<HTMLInputElement>;
  @Input() amount: Amount = {
    create_at: new Date,
    name: "",
    quantity: 0,
    user: "",
    img_url: ""
  };
  @Output() OnAmount: EventEmitter<Amount> = new EventEmitter;
  @Output() onDelete: EventEmitter<boolean> = new EventEmitter;

  matcher = new MyErrorStateMatcher();
  imgName: string = '';
  fileSend!: File;

  formAmount = this.fb.group({
    'name': ['', [
      Validators.required, Validators.minLength(3),
      Validators.pattern(notSpacer)
    ],[]],
    'quantity': [0,[
      Validators.required, Validators.min(1),
      Validators.pattern(notSpacer),
      Validators.pattern(onlyNumbers)
    ],[]],
    'category': [0,[
      Validators.required,
      Validators.min(1)
    ],[]],
    'create_at': [this.amount.create_at, [
      Validators.required
    ],[]],
    'img_url': ['',[],[]]
  });
  isDelete: boolean = false;

  constructor(private fb: FormBuilder,
              private sanitizer: DomSanitizer,
              private firebaseStorage: FirebaseStorageService,
  ) {}

  public campoIsInvalid(item: string): boolean {
    return <boolean><unknown>this.formAmount.get(item)?.errors
  }

  /**
   * Prepara objeto para emitir, sube file y elimina
   * si existe uno anteriormente
   */
  create() {
    let porcent = 0
    let lastPhotoPath: string = '';

    if (this.formAmount.valid) {
      this.amount.name = <string>this.formAmount.value.name;
      this.amount.quantity = <number>this.formAmount.value.quantity;
      this.amount.category =  <number><unknown>this.formAmount.value.category;
      this.amount.create_at = <Date><unknown>this.formAmount.value.create_at;
      this.amount.user = localStorage.getItem('uid')!;

      if (this.fileSend) {
        if (this.amount.img_url && this.amount.img_url.length > 0) {
          lastPhotoPath = this.amount.img_url;
          this.firebaseStorage.delete(lastPhotoPath)
            .then()
            .catch((err) => {
              console.log(err);
            })
        }

        let ref = this.firebaseStorage.referenciaCloudStorage(this.fileSend.name);
        let task = this.firebaseStorage.tareaCloudStorage(this.fileSend.name, this.fileSend);

        task.percentageChanges()
          .subscribe((porcentaje) => {
            if (typeof porcentaje === "number") {
              porcent = Math.round(porcentaje);
            }
            if (porcent == 100) {
                ref.getDownloadURL().subscribe({
                  next: (url) => {
                    this.amount.img_url = url;
                    this.OnAmount.emit(this.amount);
                  },
                  error: (error) => {
                    alertError("Ha ocurrido un error en el proceso, vuelve intentar más tarde");
                    console.log(error);
                  }
                });
            }
          })
      } else {
        if (this.amount.img_url && this.amount.img_url.length == 0){
          this.amount.img_url = <string | undefined>this.formAmount.value.img_url;
        }

        this.OnAmount.emit(this.amount);
      }
    }
  }

  ngOnInit(): void {
    this.formAmount.get('img_url')?.valueChanges

      .subscribe({
        next: (res) => {
          console.log(this.formAmount.get('img_url'));
          if (res) {
            if (this.file.nativeElement.files) {
              const file = this.file.nativeElement.files[0];
              const objURL = URL.createObjectURL(file);
              this.imgName = objURL
            }
          }
        }
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['amount']) {
      this.amount = {...changes['amount'].currentValue};
      this.formAmount.get('name')?.setValue(this.amount.name);
      this.formAmount.get('quantity')?.setValue(this.amount.quantity);
      if (this.amount.category != null) {
        this.formAmount.get('category')?.setValue(this.amount.category);
      }

    }
  }

  public getSanitizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  delete() {
    this.onDelete.emit(true);
  }

  handleDenial() {}

  /**
   * Se va cambiado el fichero que se envia
   * al padre , por cada evento Change
   * @param event
   */
  setImgSend(event: Event) {
    // @ts-ignore
    if (event.target.files.length > 0) {
      // @ts-ignore
      this.fileSend = event.target.files[0];
    }
  }
}

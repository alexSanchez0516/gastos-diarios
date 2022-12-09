import {ItemLink} from "../interfaces/ItemLink.interface";

export const routesMain : ItemLink[] = [
  {
    id: 0,
    text: "Inicio",
    url: '/app/inicio',
    icon: 'home'
  },
  {
    text: "Agregar gasto",
    url: '/app/crear-gasto',
    icon: 'add',
    icon2: 'shopping_cart'
  },
  {
    text: "Agregar ingreso",
    url: '/app/crear-ingreso',
    icon: 'add',
    icon2: 'payments'
  },
  {
    text: "Movimientos",
    url: '/app/movimientos',
    icon: 'fact_check',
    icon2: 'visibility'
  },
  {
    text: "Reportes y gráficas",
    url: '/app/dashboard',
    icon: 'bar_chart',
    icon2:"visibility"
  },
  {
    text: "Recordatorios",
    url: '/app/recordatorios',
    icon: 'today',
    icon2: 'visibility'

  },
  {
    text: "Opciones",
    url: '/app/opciones',
    icon: 'settings',
    icon2: 'visibility'

  }
]

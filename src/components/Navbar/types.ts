import { FunctionComponent } from 'react'

type NavProps = {
  toggleNav: (open: boolean) => void,
  isOpen: boolean
}
export type NavComponent = FunctionComponent<NavProps>



export type IndexToTabNameT = { [property: string]: number }
export type TabNameToIndexT = { [property: number]: string }
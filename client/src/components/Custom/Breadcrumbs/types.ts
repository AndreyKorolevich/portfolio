import { FunctionComponent } from 'react'

type BreadcrumbsProps = {
  links: Array<{
    name: string
    link?: string
  }>
  className?: string
}
export type BreadcrumbsComponent = FunctionComponent<BreadcrumbsProps>

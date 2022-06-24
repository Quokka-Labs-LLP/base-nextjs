export interface BaseProps {
  className: string
  [key: string]: unknown
}

export interface LeafProp {
  bold?: boolean
  code?: boolean
  italic?: boolean
  underline?: boolean
  text?: string
  highlight?: boolean
  comment?: boolean
  operator?: boolean
  url?: boolean
  keyword?: boolean
  variable?: boolean
  regex?: boolean
  number?: boolean
  boolean?: boolean
  tag?: boolean
  constant?: boolean
  symbol?: boolean
  'attr-name'?: boolean
  selector?: boolean
  punctuation?: boolean
  string?: boolean
  char?: boolean
  function?: boolean
  'class-name'?: boolean
}

interface PageTitleProps {
  children: string
}

export const PageTitle = (props: PageTitleProps) => {
  return <h1 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '10px' }}>{props.children}</h1>
}

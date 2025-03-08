import { ReactNode } from 'react'

type SectionProps = {
    title?: String,
    children: ReactNode

}


export const Section = ({children,title = "My Subheading"} : SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default Section
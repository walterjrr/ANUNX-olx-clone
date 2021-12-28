import Header from '../components/appBar'

const Default = ({children}) => {
    return(
        <>
            <Header>HEADER</Header>
            {children}
            <footer>Footer</footer>
        </>
    )
}

export default Default
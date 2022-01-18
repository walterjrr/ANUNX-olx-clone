import Header from '../components/appBar'
import Footer from '../components/footer'

const Default = ({children}) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default
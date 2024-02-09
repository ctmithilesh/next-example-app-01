// Server-side page 
import Cookies from "universal-cookie"
import CounterComponent from "../components/CounterComponent"

export const metadata = {
    title: "Counter",
    description: "Counter App"
}

const cookies = new Cookies()
console.log('accessToken')
console.log(cookies.get('accessToken'))


const Page = () => {

    return (
        <CounterComponent />
    )
}

export default Page

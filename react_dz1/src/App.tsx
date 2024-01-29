import './App.css'
import { InputApi } from './Components/InputApi'
import { RamkaFun } from './Components/RamkaFun'


function App() {
    // const [count, setCount] = useState(0)


    return (
        <>
            <div>
                <RamkaFun ramkastyle="ramka">
                 <InputApi />                                                
                </RamkaFun>

            </div>

        </>
    )
}

export default App

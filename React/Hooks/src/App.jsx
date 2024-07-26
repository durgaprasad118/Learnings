import { RecoilRoot } from 'recoil';
import Counter from './components/dp';
import Rec from './components/Rec';
import Debounce from './components/Debounce';
function App() {
    return (
        <RecoilRoot>
            {/* <Counter /> */}
            {/* <Rec /> */}
            <Debounce />
        </RecoilRoot>
    );
}

export default App;

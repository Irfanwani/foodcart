import Main from './src/screens/Main'
import {FC} from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistedStore } from './src/store/store'
import Loading from './src/components/Loading'

import Form from './src/components/Form'

const App: FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading={<Loading />}>
            <Main />
            <Form />
            </PersistGate>

        </Provider>
    )
}

export default App;
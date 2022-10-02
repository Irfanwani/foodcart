import {FC} from 'react'

import { View, ActivityIndicator } from 'react-native'
import styles from '../styles'

const Loading: FC = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size='large' color='teal' />
        </View>
    )
}

export default Loading;
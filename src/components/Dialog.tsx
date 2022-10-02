import {FC} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import * as Animatable from 'react-native-animatable'
import styles from '../styles'

const Dialog: FC = () => {
    return (
        <Animatable.View animation='' duration={250}>
            <Text style={styles.warning}>Are you Sure?</Text>
            <Text>This action cannot be reverted.</Text>

            <View>
                <TouchableOpacity>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    )
}

export default Dialog;
import { View } from "react-native"
import Svg, { Path } from 'react-native-svg'

export default function FileIcon() {
  return (
    <View>
      <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fafafa" viewBox="0 0 256 256">
        <Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z">
        </Path>
        </Svg>
    </View>
  )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '@screens/Login'
import { StepFive } from '@screens/onboarding/StepFive'
import { StepFour } from '@screens/onboarding/StepFour'
import { StepOne } from '@screens/onboarding/StepOne'
import { StepThree } from '@screens/onboarding/StepThree'
import { StepTwo } from '@screens/onboarding/StepTwo'
import { Registration } from '@screens/Registration'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="StepOne"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="stepOne" component={StepOne} />
      <Screen name="stepTwo" component={StepTwo} />
      <Screen name="stepThree" component={StepThree} />
      <Screen name="stepFour" component={StepFour} />
      <Screen name="stepFive" component={StepFive} />
      <Screen name="login" component={Login} />
      <Screen name="registration" component={Registration} />
    </Navigator>
  )
}

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCheckAuthMutation } from "../../stores/authApi";
import { setAuth } from "../../stores/authSlice";
import { RootState } from "../../stores/index";

export default function TabsLayout()
{
    const dispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    const [checkAuth] = useCheckAuthMutation();

    // mount di tabs chiamo /auth
    useEffect(() =>
    {
        (async () =>
        {
            try
            {
                const result = await checkAuth().unwrap(); // se non va a buon fine eccezione

                dispatch(setAuth({ isAuth: result.isAuth, token: result.token }));
            } catch (e)
            {
                console.log(e);
                dispatch(setAuth({ isAuth: false, token: "" }));
            }
        })();
    });



    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Protected guard={isAuth}>
                <Tabs.Screen
                    name="completati"
                    options={{
                        title: 'Completati',
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    }}
                />
            </Tabs.Protected>

        </Tabs>
    );
}

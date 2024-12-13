import { useAuthStore } from "../../store/authUser"

const HomeScreen = () => {
  const { logout } = useAuthStore()
  return (
    <div>HomeScreen

      <button onClick={logout}>log out</button>
    </div>
  )
}

export default HomeScreen
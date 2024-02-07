import {
  ActivityProfile,
  Header,
  ActivityCategory,
  Overview,
} from "@/components"

const Activity = () => {
  return (
    <div>
      <Header button={false} profileInfo={true} />
      <ActivityProfile />
      <ActivityCategory />
      <Overview />
    </div>
  )
}
export default Activity

import {
  Activity,
  Header,
  Items,
  PageFooter,
  Profile,
  Status,
  Traits,
} from "@/components"

const Collection = () => {
  return (
    <div>
      <Header profileInfo={true} button={false} />
      <Profile />
      <div className="flex border-t border-gray-800">
        <div className="border-r w-[20%] border-gray-800">
          <Status />
          <Traits />
        </div>
        <div className="w-[55%]">
          <Items />
        </div>
        <div className="w-[25%]">
          <Activity />
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default Collection

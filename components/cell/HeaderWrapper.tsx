import { Suspense } from "react"
import Header from "../layout/Header"
import SuspenseFallback from "./SuspenseFallback"
const HeaderWrapper = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}><Header /></Suspense>
  )
}

export default HeaderWrapper
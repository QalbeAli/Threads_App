import AccountProfile from "@/components/forms/AccountProfile";
import {currentUser} from "@clerk/nextjs"

async function Page() {
    const user = await currentUser();

    const userInfo = {}

    const userData = {
        id:user?.id,
        objctId:userInfo._id,
        username:userInfo.username || user?.username,
        name:userInfo?.name || user?.firstName || ""

    }

    return (
        <main className="mx-auto d flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">OnBoarding!!!</h1>
            <p className="mt-3 text-base-regular text-light-2">Complete Your Profile Now To Use Threads</p>
            <section className="mt-9 bg-dark-2 p-10">
            <AccountProfile />
            </section>
        </main>
    )
}

export default Page;
import Link from "next/link";
import Image from "next/image";

function HeaderLogo() {
  return (
    <Link href='/'>
        <div className="items-center hidden lg:flex">
            <Image src="/logo2.svg" alt="logo" height={70} width={70} />
            {/* <p className="font-semibold text-2xl text-white ml-2.5">
                Financio
            </p> */}
        </div>
    </Link>
  )
}

export default HeaderLogo

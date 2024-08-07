import Link from "next/link";
import Image from "next/image";

function HeaderLogo() {
  return (
    <Link href='/'>
        <div className="items-center hidden lg:flex">
            <Image src="/logo.svg" alt="logo" height={30} width={30} />
            <p className="font-semibold text-2xl text-white ml-2.5">
                Financio
            </p>
        </div>
    </Link>
  )
}

export default HeaderLogo

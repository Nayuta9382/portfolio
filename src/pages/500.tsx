import Link from "next/link";

const  Custom500 = () => {
    return (
        <div className="mt-5 flex flex-col gap-3">
        <h1 className="text-center text-2xl md:text-3xl">500 Internal Server Error</h1>
        <p className="text-center">サーバーに問題が発生しました。</p>
        <p className="text-center">お手数ですが、再度アクセスをお試しください。</p>
        <Link href="/" className=" block w-fit m-auto  text-center border-black border-b-[1px] hover:opacity-70 active:opacity-60">ホームページに戻る</Link>
    </div>
    );
}
 
export default  Custom500;
import Link from "next/link";

const Custom404 = () => {
    return (
    <div className="mt-5 flex flex-col gap-3">
        <h1 className="text-center text-2xl md:text-3xl">404 Not Found</h1>
        <p className="text-center">お探しのページは存在しません。URLを再度確認してください。</p>
        <Link href="/" className=" block w-fit m-auto  text-center border-black border-b-[1px] hover:opacity-70 active:opacity-60">ホームページに戻る</Link>
    </div>
    );
}
 
export default Custom404;
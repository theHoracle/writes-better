import CardList from "@/components/CardList"
import Menu from "@/components/Menu"

const BlogPage = () => {
    return <div>
        <h1 className="bg-cyan-500 px-6 py-3 font-bold text-xl text-center">Style Posts</h1>
        <div className="flex gap-12">
            <CardList />
            <Menu />
        </div>
    </div>
}
export default BlogPage
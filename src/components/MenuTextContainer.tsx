interface MenuTextContainerProps {
    category: string;
    title?: string;
    name?: string;
    date?: string;
    bgColor: string
}
const MenuTextContainer = ({category, bgColor}: MenuTextContainerProps) => {
    return <div className="w-full flex flex-col text-xs gap-1">
        <span className={`${bgColor} py-0.5 px-2 max-w-fit rounded-2xl text-gray-50`}>{category}</span>
        <h3 className="text-lg font-semibold text-muted-foreground leading-4 tracking-tight">Lorem ipsum dolor sit amet.</h3>
        <div>
            <span className="font-medium">John Doe - </span>
            <span className="text-gray-400">28.05.2024</span>
        </div>
    </div>

}

export default MenuTextContainer;
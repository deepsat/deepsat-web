const AnimationWrapper = ({ children }) => {
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        setDidMount(true);
    })
    return <div class={`animateMount ${didMount ? " mounted" : ""}`}>{children}</div>;
}
export default AnimationWrapper;
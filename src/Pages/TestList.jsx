import MediTest from "../Components/All Tests/MediTest";
import Search from "../Components/All Tests/Search";

const TestList = () => {
    return (
        <>
            <section className="container mx-auto">
                <Search></Search>
            </section>
            <section className="container mx-auto">
                <MediTest></MediTest>
            </section>
        </>
    );
};

export default TestList;
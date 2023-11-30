import MediTest from "../Components/All Tests/MediTest";
import Search from "../Components/All Tests/Search";

const TestList = () => {
    return (
        <>
            <section className="container mx-auto mt-20 space-y-16">
                <section >
                    <Search></Search>
                </section>
                <MediTest></MediTest>
            </section>
        </>
    );
};

export default TestList;
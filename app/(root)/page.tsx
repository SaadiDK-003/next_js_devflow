import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const Home = async () => {
  const questions = [
    {
      _id: "1",
      title: "How to learn ReactJs?",
      description: "I want to learn React 19, can anyone help?",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
      ],
      author: { _id: "1", name: "Saad" },
      upvotes: 10,
      answers: 5,
      views: 100,
      cratedAt: new Date(),
    },
    {
      _id: "2",
      title: "How to learn JavaScript?",
      description: "I want to learn Js ES6, can anyone help?",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
      ],
      author: { _id: "1", name: "Saad" },
      upvotes: 10,
      answers: 5,
      views: 100,
      cratedAt: new Date(),
    },
  ];

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="mt-5 text-3xl font-bold text-dark100_light900">
          All Questions
        </h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
      </section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.map((question) => (
          <p key={question._id}>{question.title}</p>
        ))}
      </div>
    </>
  );
};

export default Home;

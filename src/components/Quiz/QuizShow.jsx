import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import MenuButton from "../MenuButton";

function QuizShow({ quiz }) {
  return (
    <Card className="mt-6 w-64 h-72">
      <CardHeader className="h-24">
        <img
          src="src\assets\attendance-tracker-low-resolution-color-logo.png"
          className="object-center object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography className="font-bold">{quiz.name}</Typography>
        <Typography variant="small">
          Number of Questions: {quiz.questions.length}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 w-full absolute bottom-0 flex justify-between">
        <a href="#" className="inline-block">
          <Button size="sm" className="flex items-center gap-2">
            Create Form
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
        <MenuButton />
      </CardFooter>
    </Card>
  );
}

QuizShow.propTypes = {
  quiz: propTypes.object.isRequired,
};

export default QuizShow;

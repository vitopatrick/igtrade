import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqs = [
  {
    id: 1,
    question: "How many confirmations do i need?",
    answer:
      "he deposit transaction will be automatic, and the Bitcoin transfer will need to be confirmed by the entire Bitcoin network, and your Bitcoin will be automatically deposited to your account after 6 confirmation",
  },
  {
    id: 2,
    question: "What is the minimum deposit",
    answer: "The deposit amount must be between $5 – $5,000 per trade.",
  },
  {
    id: 3,
    question: "How long does it take to deposit",
    answer:
      "Once there are enough confirmations on the blockchain, the system will start proceeding your deposit. This can take up to 2-3 hours.",
  },
  {
    id: 4,
    question: "Can i deposit without verification?",
    answer:
      "Although you can technically use the platform even without verifying your identity, a withdrawal limit will be imposed on you until you undergo the verification process",
  },
  {
    id: 5,
    question: "Why is my deposit taking so long?",
    answer:
      "Sometimes, there can be delays in the time needed for our system to record your deposit. If you still haven't received your deposit after the allotted time frame, please contact our online support and provide the following info",
  },
  {
    id: 6,
    question: "How long does Usdt deposit ?",
    answer:
      "Sometimes, there can be delays in the time needed for our system to record your deposit. If you still haven't received your deposit after the allotted time frame, please contact our online support and provide the following info",
  },
  {
    id: 7,
    question: "How long does it take to receive BTC ?",
    answer:
      "we try to process all withdrawal requests within 30 minutes. However, withdrawals can take up to 2-3 hours to process when many transactions are taking place on a certain blockchain network.",
  },
];

export function DepositFaq() {
  return (
    <div className="flex-1">
      <h3 className="my-4 text-xl underline">Faq</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem value={faq.id.toString()} key={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

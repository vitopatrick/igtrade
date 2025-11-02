import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'How many confirmations do I need?',
    answer:
      'The deposit transaction will be automatic, and the Bitcoin transfer will need to be confirmed by the entire Bitcoin network. Your Bitcoin will be automatically deposited to your account after 6 confirmations.',
  },
  {
    id: 2,
    question: 'What is the minimum deposit?',
    answer: 'The deposit amount must be between $5 – $5,000 per transaction.',
  },
  {
    id: 3,
    question: 'How long does it take to deposit?',
    answer:
      'Once there are enough confirmations on the blockchain, the system will start processing your deposit. This can take up to 2-3 hours depending on network congestion.',
  },
  {
    id: 4,
    question: 'Can I deposit without verification?',
    answer:
      'Although you can use the platform without verifying your identity, a withdrawal limit will be imposed until you complete the verification process.',
  },
  {
    id: 5,
    question: 'Why is my deposit taking so long?',
    answer:
      "Sometimes, there can be delays in the time needed for our system to record your deposit. If you still haven't received your deposit after the allotted time frame, please contact our online support.",
  },
  {
    id: 6,
    question: 'How long does USDT deposit take?',
    answer:
      "USDT deposits typically require 12 network confirmations. The process usually takes 10-30 minutes depending on network congestion and the blockchain you're using (ERC20 or TRC20).",
  },
  {
    id: 7,
    question: 'Are there any deposit fees?',
    answer:
      "We don't charge any fees for deposits. However, you'll need to pay the blockchain network fees when sending your cryptocurrency.",
  },
]

export function DepositFaq() {
  return (
    <Card className="border-border/50 h-fit">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Everything you need to know about deposits
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              value={faq.id.toString()}
              key={faq.id}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

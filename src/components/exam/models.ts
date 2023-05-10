
export type Answer = 'A' | 'B' | 'C' | 'D' | 'E';

export class QuestionsData {
    id: number;
    text: string;
    image: string;
    subject: number;
    open: number;
    answer?: Answer;
    correct_answer?: Answer;
    correct?: boolean;
}
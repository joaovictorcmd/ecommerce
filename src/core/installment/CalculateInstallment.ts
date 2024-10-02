import {MAX_NUMBER_INSTALLMENTS, MONTHLY_INTEREST_RATE} from "../constants";
import Installment from "@/core/installment/Installment";

export default class CalculateInstallment {
    execute(
        value: number,
        numberOfInstallments: number = MAX_NUMBER_INSTALLMENTS,
        interestRate: number = MONTHLY_INTEREST_RATE
    ): Installment {
        if (numberOfInstallments < 2 || numberOfInstallments > MAX_NUMBER_INSTALLMENTS) {
            throw new Error(`Quantidade de parcelas deve entre 2 e ${MAX_NUMBER_INSTALLMENTS}`);
        }

        const totalWithInterest = this.calculateCompoundInterest(value, interestRate, numberOfInstallments);

        return {
            installmentValue: +(totalWithInterest / numberOfInstallments).toFixed(2),
            totalValue: +totalWithInterest.toFixed(2),
            numberOfInstallments,
            interestRate
        }
    }

    private calculateCompoundInterest(totalValue: number, monthlyRate: number, numberOfInstallments: number): number {
        return totalValue * Math.pow(1 + monthlyRate, numberOfInstallments);
    }
}
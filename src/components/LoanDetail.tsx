import { useParams } from "react-router-dom";
import { personalLoanOptions, businessLoanOptions } from "@/Static/LoanOptions";
import Hero from "@/Pages/Hero";

const LoanDetail: React.FC<{ loanType: string }> = ({ loanType }) => {
    // Capture loanId from the URL parameters
    const { loanId } = useParams<{ loanId: string }>();

    console.log("loanType:", loanType);  // Will be passed as "personal" or "business"
    console.log("loanId:", loanId);      // Will be "car", "bike", etc.

    // Depending on loanType, select the appropriate loan options
    const loanOptions = loanType === "personal" ? personalLoanOptions : businessLoanOptions;

    // Find the loan based on loanId
    const loan = loanOptions.find((option) => option?.id === loanId);
    console.log("loan", loan);

    if (!loan) {
        return <div>Loan type not found</div>;
    }

    return (
        <>
            <Hero />
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold">{loan.title}</h1>
                <p>{loan.description}</p>
            </div>
        </>
    );
};

export default LoanDetail;

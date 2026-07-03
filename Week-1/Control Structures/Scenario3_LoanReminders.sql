BEGIN
    FOR l IN (
        SELECT LoanID, CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ID '
            || l.CustomerID
            || ' has Loan ID '
            || l.LoanID
            || ' due on '
            || TO_CHAR(l.DueDate, 'DD-MON-YYYY')
        );

    END LOOP;
END;
/
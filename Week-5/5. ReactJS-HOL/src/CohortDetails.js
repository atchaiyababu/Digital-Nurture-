import styles from "./CohortDetails.module.css";

function CohortDetails() {
    const status = "Ongoing";
  return (
    <div className={styles.box}>
      <h3
  style={{
    color: status === "Ongoing" ? "green" : "blue"
  }}
>
  INTADMDF10 - .NET FSD
</h3>

      <dl>
        <dt>Started On</dt>
        <dd>22-Feb-2022</dd>

        <dt>Current Status</dt>
        <dd>{status}</dd>

        <dt>Coach</dt>
        <dd>John Doe</dd>

        <dt>Trainer</dt>
        <dd>Jane Smith</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
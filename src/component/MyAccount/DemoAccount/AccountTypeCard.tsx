import styles from "./demoaccount.module.css";
const AccountTypeCard = () => {
  const accountTypes = [
    {
      title: "Standard Cent",
      tag: "Recommend",
      details: [
        "Best choice for beginners.",
        "Access to basic features.",
        "No minimum deposit required.",
      ],
    },
    {
      title: "Pro",
      tag: "Professional",
      details: [
        "Tailored services for advanced users.",
        "Premium support included.",
        "High leverage options available.",
      ],
    },
    {
      title: "Standard",
      tag: "Exclusive",
      details: [
        "Advanced trading tools and features.",
        "Lower spreads and fees.",
        "Dedicated account manager.",
      ],
    },
    {
      title: "mam/Pamm",
      tag: "Instant or Market Execution",
      details: [
        "Immediate order execution.",
        "Ideal for day traders.",
        "Access to real-time market data.",
      ],
    },
  ];

  const getTagClass = (tag: String) => {
    switch (tag) {
      case "Recommend":
        return styles.recommend;
      case "Professional":
        return styles.professional;
      case "Exclusive":
        return styles.exclusive;
      case "Instant or Market Execution":
        return styles.instantExecution;
      default:
        return "";
    }
  };

  return (
    <>
      {accountTypes.map((account, index) => (
        <div className={styles.cardConainer} key={index}>
          <div className={styles.card_header}>
            <div className={styles.card_header_items}>
              <p>{account?.title}</p>
              <div
                className={`${styles.card_header_tags} ${getTagClass(
                  account.tag
                )}`}
              >
                {account?.tag}
              </div>
            </div>

            <div className={styles.cardtype_select}></div>
          </div>
          <div className={styles.details_section}>
            <ul>
              {account.details?.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccountTypeCard;

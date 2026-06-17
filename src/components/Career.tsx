import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MSc Data Analytics</h4>
                <h5>Dublin Business School</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Modules: Programming for Data Analysis, Statistics, Data Mining, Machine Learning and Pattern Recognition, and Data Visualization using Tableau and Power BI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Analyst</h4>
                <h5>Merkle (A Dentsu Company)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Delivered healthcare analytics projects, ensuring 99% data accuracy. Conducted advanced tabulation using Quantum and SPSS. Produced analytical reports to support data-driven decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Executive - Data Processing</h4>
                <h5>IPSOS</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Processed and transformed large survey datasets. Developed automation functions reducing manual effort by 30%. Conducted statistical analysis using SPSS and Dimensions. Delivered solutions for major clients including ESPN, Scotiabank, and L'Oréal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

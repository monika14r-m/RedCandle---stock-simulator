RedCandle

A stock market simulation platform for exploring trading strategies, portfolio management, and market behavior — in a risk-free learning environment.

Overview

RedCandle is built for beginners and developers who want to understand how trading works before risking real money. It provides a simplified but realistic simulation where users can place orders, track portfolios, analyze outcomes, and experiment with strategies — all without financial consequence.

FeatureDetailsOrder SimulationSimulated buy and sell order executionPortfolio TrackingReal-time portfolio value and holdingsP&L AnalysisProfit and loss breakdown per trade and overallTransaction HistoryFull log of all executed ordersStrategy TestingExperiment with trading approaches safely

Project Structure

RedCandle---stock-simulator/
├── frontend/               # UI — charts, dashboard, order panel
├── .github/workflows/      # GitHub Actions — Jekyll deployment
└── README.md

Getting Started

bashgit clone https://github.com/monika14r-m/RedCandle---stock-simulator.git
cd RedCandle---stock-simulator/frontend

Open index.html in your browser or serve it locally:

bashnpx serve .

Live demo: monika14r-m.github.io/RedCandle---stock-simulator

Roadmap

Phase 1 — Core Simulation


 Basic portfolio management
 Order execution simulation
 Transaction tracking


Phase 2 — Analytics


 Portfolio analytics dashboard
 Historical performance metrics
 Strategy comparison tools


Phase 3 — Advanced Features


 Market event simulation
 Risk management features
 Advanced reporting


Limitations

RedCandle is an educational simulator and does not fully replicate real-world trading conditions. The following are not currently modeled:


Brokerage fees and commissions
Tax calculations
Market liquidity constraints
Slippage and spread effects
Regulatory compliance requirements


Results from the simulator should not be interpreted as real investment outcomes.

Contributing

Suggestions, bug reports, and improvements are welcome. Please open an issue before submitting a pull request so we can align on scope.

bashgit checkout -b feature/your-feature-name
# make changes, then open a pull request

Disclaimer

This project is intended solely for educational and research purposes. It does not provide financial advice and should not be used as a basis for real-world investment decisions.

License

MIT License. See LICENSE for details.

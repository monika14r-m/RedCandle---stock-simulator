# RedCandle

A stock market simulation platform for exploring trading strategies, portfolio management, and market behavior in a risk-free learning environment.

---

## Overview

RedCandle is an educational stock trading simulator designed to help users understand the fundamentals of investing and trading without risking real capital.

The platform allows users to execute simulated trades, monitor portfolio performance, analyze results, and experiment with different strategies using virtual funds.

### Features

| Feature             | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| Order Simulation    | Simulated buy and sell order execution                     |
| Portfolio Tracking  | Real-time portfolio value and holdings                     |
| P&L Analysis        | Profit and loss breakdown per trade and overall            |
| Transaction History | Complete log of executed orders                            |
| Strategy Testing    | Safe environment for experimenting with trading strategies |

---

## Project Structure

```text
RedCandle---stock-simulator/
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
├── .github/
│   └── workflows/
│
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/monika14r-m/RedCandle---stock-simulator.git

cd RedCandle---stock-simulator/frontend
```

### Run Locally

Open `index.html` directly in your browser or serve the project locally:

```bash
npx serve .
```

---

## Live Demo

https://monika14r-m.github.io/RedCandle---stock-simulator/

---

## Roadmap

### Phase 1 — Core Simulation

* [x] Basic portfolio management
* [x] Order execution simulation
* [x] Transaction tracking

### Phase 2 — Analytics

* [ ] Portfolio analytics dashboard
* [ ] Historical performance metrics
* [ ] Strategy comparison tools

### Phase 3 — Advanced Features

* [ ] Market event simulation
* [ ] Risk management features
* [ ] Advanced reporting

---

## Limitations

RedCandle is an educational simulator and does not fully replicate real-world trading environments.

The following factors are not currently modeled:

* Brokerage fees and commissions
* Tax calculations
* Market liquidity constraints
* Slippage and spread effects
* Regulatory compliance requirements

Simulation results should not be interpreted as real investment outcomes.

---

## Contributing

Contributions, suggestions, and bug reports are welcome.

Please open an issue before submitting a pull request to discuss significant changes.

```bash
git checkout -b feature/your-feature-name
```

Make your changes, commit them, and open a pull request.

---

## Disclaimer

This project is intended solely for educational and research purposes.

RedCandle does not provide financial advice and should not be used as the basis for real-world investment decisions.

---

## License

Licensed under the MIT License.

See the `LICENSE` file for additional information.

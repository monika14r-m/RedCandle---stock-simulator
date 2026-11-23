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
├── .github/
│   └── workflows/
│       └── jekyll-gh-pages.yml
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── market-hours.mjs
│   └── style.css
├── tests/
│   ├── test_frontend_assets.py
│   └── market-hours.test.mjs
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/monika14r-m/RedCandle---stock-simulator.git

cd RedCandle---stock-simulator
```

### Run Locally

Open `frontend/index.html` directly in your browser or serve the `frontend` directory locally:

```bash
npx serve frontend
```

---

The GitHub Pages workflow publishes `frontend/` as the site root. Local CSS and JavaScript references are relative to `frontend/`, so the same entry point works both locally and on the deployed project site.

## Tests

Run the market-hours tests with Node.js 22 or newer and the frontend asset tests with Python:

```bash
node --test tests/market-hours.test.mjs
python -m unittest discover -s tests -v
```

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

## Simulation assumptions and limitations

- Trading hours are simulated as **09:30–16:00 Eastern Time on weekdays** using the `America/New_York` timezone. Daylight-saving transitions are handled by the timezone database. Weekends are closed; exchange holidays are not modelled, so the simulator can still display the market as open on a holiday.
- Stock prices are synthetic and change randomly by up to ±2% on each refresh (every 2.5 seconds). They are not live market data.
- Market orders include 0.1% simulated slippage; every trade charges a flat ₹10 commission. Limit orders use the simulator's current synthetic price and do not model real order-book execution.
- Real-world taxes, liquidity, spreads, partial fills, brokerage schedules, market impact, and regulatory requirements are not modelled.

Simulation results should not be interpreted as real investment outcomes or advice.

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

# State Management Using Recoil

This repository demonstrates a basic implementation of state management using Recoil, a library for managing global state in React applications. Recoil provides an easy way to manage and share state across components.

## About Recoil

Recoil is a state management library developed by Facebook for React applications. It's designed to be efficient and flexible, allowing developers to manage state with ease. Compared to other state management libraries like Redux, Recoil has a much simpler learning curve.

To learn more about Recoil and how it works, check out the [Recoil documentation](https://recoiljs.org/).

## Limitations

- Recoil is still in the experimental stage as mentioned in their docs, so it may not be suitable for all production applications. There may be bugs or breaking changes in future releases.
- When using Recoil in production, it's essential to keep a check on their updates.
- Recoil have a smaller community compared to more established state management libraries like Redux. Please have a backup plan ready if choosing Recoil for production projects.

## Project Overview

The application comprises a single-page interface featuring three main components:

1. **Items Section**: This section showcases a list of items, each having buttons for adding them to either the cart or wishlist.

2. **Cart Section**: Here, users can view items added to their cart. Each item comes with an option to remove it from the cart if needed and a option to clear cart.

3. **Wishlist Section**: Similar to the cart section, users can see items they've added to their wishlist. Like the cart, items in the wishlist can also be removed.

The state management and logic for moving items between the cart and wishlist are implementaed using Recoil.

## Getting Started

To explore this project:

1. Clone the repository to your local environment.
2. Install dependencies by running `npm install`.
3. Launch the development server using `npm run dev`.
4. Visit the prompted port in your browser to view the application.

## Project Comparison

This same project with same functionalities are implemented using other state management libraries:

- [Redux Toolkit Version](https://github.com/rahulranjan14/reduxToolkitDemo)
- [Zustand Version](https://github.com/rahulranjan14/zustandDemo)

Comparing all three implementations can help you understand the differences and benefits of each approach.


## Contributing

If you have suggestions for improvements or any other additions, feel free to submit a PR or directly reach out to me.

If you find this helpful, consider starring this repo.

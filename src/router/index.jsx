import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HelloWorld from "../components/01-hello/hello-world";
import HelloReact from "../components/01-hello/hello-react";
import { UserLayout } from "../layouts/user-layout";
import { Jsx1 } from "../components/02-jsx/jsx1";
import { Jsx2 } from "../components/02-jsx/jsx2";
import { Jsx3 } from "../components/02-jsx/jsx3";
import { Jsx4 } from "../components/02-jsx/jsx4";
import { Jsx5 } from "../components/02-jsx/jsx5";
import { Jsx6 } from "../components/02-jsx/jsx6";
import { Jsx7 } from "../components/02-jsx/jsx7";
import { Style1 } from "../components/03-styles/style1";
import { Style2 } from "../components/03-styles/style2";
import { Style3 } from "../components/03-styles/style3";
import { Style4 } from "../components/03-styles/style4";
import { Style5 } from "../components/03-styles/style5";
import { Home } from "../components/00-common/home";
import { Customers } from "../components/26-routing/customers";
import { CustomerDetails } from "../components/26-routing/customer-details";
import { UseNavigate } from "../components/26-routing/use-navigate";
import { Converter } from "../components/27-currencies/converter";




const router = createBrowserRouter([
	{
		path: "/",
		element: <UserLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "hello-react",
				element: <HelloReact />,
			},
			{
				path: "hello-world",
				element: <HelloWorld />,
			},
			{
				path: "jsx",
				children: [
					{
						index: true,
						element: <p>Information about JSX syntax</p>,
					},
					{
						path: "1",
						element: <Jsx1 />,
					},
					{
						path: "2",
						element: <Jsx2 />,
					},
					{
						path: "3",
						element: <Jsx3 />,
					},
					{
						path: "4",
						element: <Jsx4 />,
					},
					{
						path: "5",
						element: <Jsx5 />,
					},
					{
						path: "5",
						element: <Jsx5 />,
					},
					{
						path: "6",
						element: <Jsx6 />,
					},
					{
						path: "7",
						element: <Jsx7 />,
					},
				],
			},
			{
				path: "style",
				children: [
					{
						path: "1",
						element: <Style1 />,
					},
					{
						path: "2",
						element: <Style2 />,
					},
					{
						path: "3",
						element: <Style3 />,
					},
					{
						path: "4",
						element: <Style4 />,
					},
					{
						path: "5",
						element: <Style5 />,
					},
				],
			},
			{
				path: "customers",
                children: [
                    {
                        index: true,
                        element: <Customers />,
                    },
                    {
                        path: ":customerId",
                        element: <CustomerDetails />,
                    }
                ]
			},
            {
                path: "use-navigate",
                element: <UseNavigate />
            },
			{
				path: "converter",
				element: <Converter />,
			},
			{
				path: "*",
				element: <p>Not Found</p>,
			}
		],
	},
]);



export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
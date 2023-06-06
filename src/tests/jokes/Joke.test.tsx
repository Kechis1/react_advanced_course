import axios from 'axios';
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {ChuckNorrisJoke} from "../../components/ChuckNorrisJoke";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const axiosResponse  = {data: {value: 'test'}};

beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce(axiosResponse);
});

describe('ChuckNorrisJoker component', () => {

    it('should display the load next button', async function () {
        render(<ChuckNorrisJoke/>);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Load another');
    })

    it('should disable the load next button upon initialization', async function () {
        render(<ChuckNorrisJoke/>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    })

    it('should disable the load next button while fetching data', async function () {
        render(<ChuckNorrisJoke/>);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByRole('button')).toBeDisabled();
    })

    it('should enable the load next button after fetching data', async function () {
        render(<ChuckNorrisJoke/>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        await waitFor(() => {
            expect(screen.getByRole('button')).not.toBeDisabled();
        });
    })

    it('should display no joke upon initialization', async function () {
        render(<ChuckNorrisJoke/>);
        const h2Element = screen.getByRole('heading', {level: 2});
        expect(h2Element).toHaveTextContent('');
    });

    it('should display the joke after fetching data', async function () {
        render(<ChuckNorrisJoke/>);
        expect(await screen.findByText(axiosResponse.data.value)).toBeInTheDocument();
    });

    it('should display next joke after clicking on the button load next', async function () {
        render(<ChuckNorrisJoke/>);
        const button = screen.getByRole('button');
        expect(await screen.findByText(axiosResponse.data.value)).toBeInTheDocument();

        const axiosResponse2  = {data: {value: 'test2'}};
        mockedAxios.get.mockResolvedValueOnce(axiosResponse2);
        fireEvent.click(button);

        expect(await screen.findByText(axiosResponse2.data.value)).toBeInTheDocument();
    })

})

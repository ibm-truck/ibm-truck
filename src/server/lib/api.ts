import { NextResponse } from 'next/server';

/**
 * Creates an API response with the provided message and status.
 *
 * @param {string} message - The message to be included in the response.
 * @param {number} status - The status code of the response.
 * @return {NextResponse} The API response with the provided message and status.
 */
export const APIResponse = (message: string, statusCode: number) => {
  return NextResponse.json(
    { message },
    {
      status: statusCode
    }
  );
};

/**
 * Generates an API response with data and status.
 *
 * @param {object} params - The parameters for the API response.
 * @param {any} params.data - The data to be included in the response.
 * @param {number} params.status - The status code for the response.
 * @return {object} - The API response object.
 */
export const APIResponseWithData = ({
  data,
  status
}: {
  data: any;
  status: number;
}) => {
  return NextResponse.json(data, {
    status
  });
};

export const BASE_URL = process.env.NEXTAUTH_URL
  ? process.env.NEXTAUTH_URL
  : process.env.NEXT_PUBLIC_API_URL;

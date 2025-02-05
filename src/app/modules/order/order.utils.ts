import ShurjoPay, { PaymentResponse, VerificationResponse } from "shurjopay";
import config from "../../config";

const shurjopay = new ShurjoPay();

shurjopay.config(
  config.sp.sp_endpoint!,
  config.sp.sp_username!,
  config.sp.sp_password!,
  config.sp.sp_prefix!,
  config.sp.sp_return_url!,
);

const makePaymentAsync = async (
  paymentPayload: any,
): Promise<PaymentResponse> => {
  return new Promise((resolve, reject) => {
    shurjopay.makePayment(
      paymentPayload,
      response => resolve(response),
      error => reject(error),
    );
  });
};

const verifyPaymentAsync = async (
  order_id: string,
): Promise<VerificationResponse[]> => {
  return new Promise((resolve, reject) => {
    shurjopay.verifyPayment(
      order_id,
      response => resolve(response),
      error => reject(error),
    );
  });
};

export const paymentDetails = {
  makePaymentAsync,
  verifyPaymentAsync,
};

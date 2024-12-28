import Image from "next/image";

const PaymentsGuidelines = () => {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Payment Guidelines</h1>
      <p className="mb-4">
        Thank you for supporting a small business! Please review the payment
        options below.
      </p>

      {/* Zelle Section */}
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Zelle</h2>
        <p className="mb-2">
          Zelle is my preferred method of receiving payment. You can send
          payments to the email:
          <span className="font-semibold"> helveticalake@gmail.com</span>.
        </p>
        <p className="mb-2">
          Alternatively, scan the QR code below to initiate the payment:
        </p>
        <div className="mb-4">
          <Image
            src="/qr-code-zelle.png"
            alt="Zelle QR Code"
            width={150}
            height={150}
          />
        </div>
        <p>Zelle has no fees, making it the best option for both of us!</p>
      </section>

      {/* PayPal Section */}
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">PayPal</h2>
        <p className="mb-2">
          Payments can be made through PayPal using the following link:
          <a
            href="https://www.paypal.com/biz/profile/sitarsasha"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 underline"
          >
            paypal.com/biz/profile/sitarsasha
          </a>
          .
        </p>
        <p className="mb-2">
          Alternatively, scan the QR code below to send payment via PayPal:
        </p>
        <div className="mb-4">
          <Image
            src="/qr-code-paypal.png" // Replace with the actual PayPal QR code image path
            alt="PayPal QR Code"
            width={150}
            height={150}
          />
        </div>
        <p className="mb-2 text-xs text-red-500">
          Please note: PayPal deducts fees from payments. You are responsible
          for determining and covering these fees to ensure the full agreed
          amount is delivered. For more information on PayPal fees, visit:
          <a
            href="https://www.paypal.com/us/business/paypal-business-fees"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 underline"
          >
            PayPal Business Fees
          </a>
          .
        </p>
        <p>
          While I accept PayPal, Zelle is preferred due to its lack of fees.
        </p>
      </section>

      {/* Venmo Section */}
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Venmo</h2>
        <p className="text-red-500">
          I currently do not accept payments through Venmo.
        </p>
      </section>

      {/* Cash Payment Section */}
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Cash</h2>
        <p className="mb-2">
          Cash payments are also accepted. If paying in cash, please ensure the
          full amount is handed over before I leave the performance site.
        </p>
      </section>

      {/* Closing Note */}
      <section>
        <p className="text-gray-600">
          Thank you for your cooperation and understanding. Your support means
          the world to me, and I appreciate your patience in ensuring payments
          are handled smoothly.
        </p>
      </section>
    </div>
  );
};

export default PaymentsGuidelines;

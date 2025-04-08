import React from "react";
import { Check, X } from "lucide-react";
import { goaPackages } from "../../components/Packages/goaPackages";
import "../../Styles/PackageComparison.css"; // Import the CSS file

export function PackageComparison() {
  const features = [
    "Beach Activities",
    "Cultural Tours",
    "Adventure Sports",
    "Spa Treatment",
    "Cooking Class",
    "Night Life",
  ];

  return (
    <section className="PackageComparison-section">
      <h2 className="PackageComparison-title">Compare Our Packages</h2>
      <table className="PackageComparison-table">
        <thead>
          <tr>
            <th className="PackageComparison-header">Feature</th>
            {goaPackages.map((pkg) => (
              <th key={pkg.id} className="PackageComparison-header">{pkg.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature}>
              <td className="PackageComparison-cell">{feature}</td>
              {goaPackages.map((pkg) => (
                <td key={pkg.id} className="PackageComparison-cell PackageComparison-center">
                  {Math.random() > 0.5 ? (
                    <Check className="PackageComparison-check" />
                  ) : (
                    <X className="PackageComparison-x" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
